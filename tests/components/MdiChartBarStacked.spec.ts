
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartBarStacked from "../../src/components/MdiChartBarStacked.vue";

test("MdiChartBarStacked snapshot", () => {
  const wrapper = mount(MdiChartBarStacked, {});
  expect(wrapper.html()).toMatchSnapshot();
});
