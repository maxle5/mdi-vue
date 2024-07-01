
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartPpf from "../../src/components/MdiChartPpf.vue";

test("MdiChartPpf snapshot", () => {
  const wrapper = mount(MdiChartPpf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
