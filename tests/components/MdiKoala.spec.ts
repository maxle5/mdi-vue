
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKoala from "../../src/components/MdiKoala.vue";

test("MdiKoala snapshot", () => {
  const wrapper = mount(MdiKoala, {});
  expect(wrapper.html()).toMatchSnapshot();
});
