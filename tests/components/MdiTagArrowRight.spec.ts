
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagArrowRight from "../../src/components/MdiTagArrowRight.vue";

test("MdiTagArrowRight snapshot", () => {
  const wrapper = mount(MdiTagArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
