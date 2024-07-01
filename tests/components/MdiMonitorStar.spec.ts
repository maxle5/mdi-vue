
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorStar from "../../src/components/MdiMonitorStar.vue";

test("MdiMonitorStar snapshot", () => {
  const wrapper = mount(MdiMonitorStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
