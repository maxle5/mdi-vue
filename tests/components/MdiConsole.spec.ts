
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiConsole from "../../src/components/MdiConsole.vue";

test("MdiConsole snapshot", () => {
  const wrapper = mount(MdiConsole, {});
  expect(wrapper.html()).toMatchSnapshot();
});
