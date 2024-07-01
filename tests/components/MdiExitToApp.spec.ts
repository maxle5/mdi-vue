
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExitToApp from "../../src/components/MdiExitToApp.vue";

test("MdiExitToApp snapshot", () => {
  const wrapper = mount(MdiExitToApp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
