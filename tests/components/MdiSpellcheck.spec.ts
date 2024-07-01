
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpellcheck from "../../src/components/MdiSpellcheck.vue";

test("MdiSpellcheck snapshot", () => {
  const wrapper = mount(MdiSpellcheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
