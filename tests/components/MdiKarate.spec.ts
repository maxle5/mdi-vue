
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKarate from "../../src/components/MdiKarate.vue";

test("MdiKarate snapshot", () => {
  const wrapper = mount(MdiKarate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
