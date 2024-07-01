
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorDifference from "../../src/components/MdiVectorDifference.vue";

test("MdiVectorDifference snapshot", () => {
  const wrapper = mount(MdiVectorDifference, {});
  expect(wrapper.html()).toMatchSnapshot();
});
