
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDna from "../../src/components/MdiDna.vue";

test("MdiDna snapshot", () => {
  const wrapper = mount(MdiDna, {});
  expect(wrapper.html()).toMatchSnapshot();
});
