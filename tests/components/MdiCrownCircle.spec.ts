
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrownCircle from "../../src/components/MdiCrownCircle.vue";

test("MdiCrownCircle snapshot", () => {
  const wrapper = mount(MdiCrownCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
