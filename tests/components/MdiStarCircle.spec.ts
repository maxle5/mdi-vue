
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarCircle from "../../src/components/MdiStarCircle.vue";

test("MdiStarCircle snapshot", () => {
  const wrapper = mount(MdiStarCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
