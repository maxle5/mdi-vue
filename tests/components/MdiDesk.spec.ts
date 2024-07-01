
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDesk from "../../src/components/MdiDesk.vue";

test("MdiDesk snapshot", () => {
  const wrapper = mount(MdiDesk, {});
  expect(wrapper.html()).toMatchSnapshot();
});
