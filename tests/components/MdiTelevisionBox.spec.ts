
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionBox from "../../src/components/MdiTelevisionBox.vue";

test("MdiTelevisionBox snapshot", () => {
  const wrapper = mount(MdiTelevisionBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
