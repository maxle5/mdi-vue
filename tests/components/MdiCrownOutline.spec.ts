
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrownOutline from "../../src/components/MdiCrownOutline.vue";

test("MdiCrownOutline snapshot", () => {
  const wrapper = mount(MdiCrownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
