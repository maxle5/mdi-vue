
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorCellphoneStar from "../../src/components/MdiMonitorCellphoneStar.vue";

test("MdiMonitorCellphoneStar snapshot", () => {
  const wrapper = mount(MdiMonitorCellphoneStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
