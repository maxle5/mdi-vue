
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSailBoat from "../../src/components/MdiSailBoat.vue";

test("MdiSailBoat snapshot", () => {
  const wrapper = mount(MdiSailBoat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
