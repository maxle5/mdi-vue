
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorRectangle from "../../src/components/MdiVectorRectangle.vue";

test("MdiVectorRectangle snapshot", () => {
  const wrapper = mount(MdiVectorRectangle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
