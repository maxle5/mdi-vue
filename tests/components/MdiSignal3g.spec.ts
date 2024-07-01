
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignal3g from "../../src/components/MdiSignal3g.vue";

test("MdiSignal3g snapshot", () => {
  const wrapper = mount(MdiSignal3g, {});
  expect(wrapper.html()).toMatchSnapshot();
});
