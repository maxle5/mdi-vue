
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagFaces from "../../src/components/MdiTagFaces.vue";

test("MdiTagFaces snapshot", () => {
  const wrapper = mount(MdiTagFaces, {});
  expect(wrapper.html()).toMatchSnapshot();
});
