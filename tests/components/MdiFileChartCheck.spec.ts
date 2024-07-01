
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileChartCheck from "../../src/components/MdiFileChartCheck.vue";

test("MdiFileChartCheck snapshot", () => {
  const wrapper = mount(MdiFileChartCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
