
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatPilcrowArrowLeft from "../../src/components/MdiFormatPilcrowArrowLeft.vue";

test("MdiFormatPilcrowArrowLeft snapshot", () => {
  const wrapper = mount(MdiFormatPilcrowArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
