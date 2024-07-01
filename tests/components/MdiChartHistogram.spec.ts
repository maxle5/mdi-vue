
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartHistogram from "../../src/components/MdiChartHistogram.vue";

test("MdiChartHistogram snapshot", () => {
  const wrapper = mount(MdiChartHistogram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
