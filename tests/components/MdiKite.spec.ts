
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKite from "../../src/components/MdiKite.vue";

test("MdiKite snapshot", () => {
  const wrapper = mount(MdiKite, {});
  expect(wrapper.html()).toMatchSnapshot();
});
