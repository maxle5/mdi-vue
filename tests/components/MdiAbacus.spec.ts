
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAbacus from "../../src/components/MdiAbacus.vue";

test("MdiAbacus snapshot", () => {
  const wrapper = mount(MdiAbacus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
