
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatPilcrowArrowRight from "../../src/components/MdiFormatPilcrowArrowRight.vue";

test("MdiFormatPilcrowArrowRight snapshot", () => {
  const wrapper = mount(MdiFormatPilcrowArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
