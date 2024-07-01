
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPentagram from "../../src/components/MdiPentagram.vue";

test("MdiPentagram snapshot", () => {
  const wrapper = mount(MdiPentagram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
