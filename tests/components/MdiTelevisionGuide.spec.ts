
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionGuide from "../../src/components/MdiTelevisionGuide.vue";

test("MdiTelevisionGuide snapshot", () => {
  const wrapper = mount(MdiTelevisionGuide, {});
  expect(wrapper.html()).toMatchSnapshot();
});
