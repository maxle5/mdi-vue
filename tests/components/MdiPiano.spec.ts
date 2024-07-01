
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPiano from "../../src/components/MdiPiano.vue";

test("MdiPiano snapshot", () => {
  const wrapper = mount(MdiPiano, {});
  expect(wrapper.html()).toMatchSnapshot();
});
