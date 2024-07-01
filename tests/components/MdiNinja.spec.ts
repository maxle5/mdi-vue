
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNinja from "../../src/components/MdiNinja.vue";

test("MdiNinja snapshot", () => {
  const wrapper = mount(MdiNinja, {});
  expect(wrapper.html()).toMatchSnapshot();
});
