
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHail from "../../src/components/MdiHail.vue";

test("MdiHail snapshot", () => {
  const wrapper = mount(MdiHail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
