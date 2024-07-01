
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLadybug from "../../src/components/MdiLadybug.vue";

test("MdiLadybug snapshot", () => {
  const wrapper = mount(MdiLadybug, {});
  expect(wrapper.html()).toMatchSnapshot();
});
