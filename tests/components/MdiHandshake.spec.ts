
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandshake from "../../src/components/MdiHandshake.vue";

test("MdiHandshake snapshot", () => {
  const wrapper = mount(MdiHandshake, {});
  expect(wrapper.html()).toMatchSnapshot();
});
