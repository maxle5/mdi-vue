
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorDifferenceBa from "../../src/components/MdiVectorDifferenceBa.vue";

test("MdiVectorDifferenceBa snapshot", () => {
  const wrapper = mount(MdiVectorDifferenceBa, {});
  expect(wrapper.html()).toMatchSnapshot();
});
