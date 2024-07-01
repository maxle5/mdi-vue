
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChartBubble from "../../src/components/MdiChartBubble.vue";

test("MdiChartBubble snapshot", () => {
  const wrapper = mount(MdiChartBubble, {});
  expect(wrapper.html()).toMatchSnapshot();
});
