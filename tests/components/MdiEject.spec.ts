
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEject from "../../src/components/MdiEject.vue";

test("MdiEject snapshot", () => {
  const wrapper = mount(MdiEject, {});
  expect(wrapper.html()).toMatchSnapshot();
});
