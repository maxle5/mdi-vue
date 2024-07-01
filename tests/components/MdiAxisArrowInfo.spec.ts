
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisArrowInfo from "../../src/components/MdiAxisArrowInfo.vue";

test("MdiAxisArrowInfo snapshot", () => {
  const wrapper = mount(MdiAxisArrowInfo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
