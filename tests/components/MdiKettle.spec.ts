
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKettle from "../../src/components/MdiKettle.vue";

test("MdiKettle snapshot", () => {
  const wrapper = mount(MdiKettle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
