
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarFace from "../../src/components/MdiStarFace.vue";

test("MdiStarFace snapshot", () => {
  const wrapper = mount(MdiStarFace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
