
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodTurkey from "../../src/components/MdiFoodTurkey.vue";

test("MdiFoodTurkey snapshot", () => {
  const wrapper = mount(MdiFoodTurkey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
