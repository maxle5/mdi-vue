
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrownCircleOutline from "../../src/components/MdiCrownCircleOutline.vue";

test("MdiCrownCircleOutline snapshot", () => {
  const wrapper = mount(MdiCrownCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
