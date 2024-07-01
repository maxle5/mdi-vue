
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKayaking from "../../src/components/MdiKayaking.vue";

test("MdiKayaking snapshot", () => {
  const wrapper = mount(MdiKayaking, {});
  expect(wrapper.html()).toMatchSnapshot();
});
