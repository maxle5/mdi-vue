
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayCircle from "../../src/components/MdiPlayCircle.vue";

test("MdiPlayCircle snapshot", () => {
  const wrapper = mount(MdiPlayCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
