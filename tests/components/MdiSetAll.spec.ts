
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetAll from "../../src/components/MdiSetAll.vue";

test("MdiSetAll snapshot", () => {
  const wrapper = mount(MdiSetAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
