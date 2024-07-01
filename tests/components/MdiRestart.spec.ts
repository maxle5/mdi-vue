
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRestart from "../../src/components/MdiRestart.vue";

test("MdiRestart snapshot", () => {
  const wrapper = mount(MdiRestart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
