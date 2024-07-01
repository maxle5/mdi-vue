
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRemote from "../../src/components/MdiRemote.vue";

test("MdiRemote snapshot", () => {
  const wrapper = mount(MdiRemote, {});
  expect(wrapper.html()).toMatchSnapshot();
});
