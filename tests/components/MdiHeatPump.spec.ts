
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeatPump from "../../src/components/MdiHeatPump.vue";

test("MdiHeatPump snapshot", () => {
  const wrapper = mount(MdiHeatPump, {});
  expect(wrapper.html()).toMatchSnapshot();
});
