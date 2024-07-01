
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartDonut from "../../src/components/MdiChartDonut.vue";

test("MdiChartDonut snapshot", () => {
  const wrapper = mount(MdiChartDonut, {});
  expect(wrapper.html()).toMatchSnapshot();
});
