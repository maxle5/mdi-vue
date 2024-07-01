
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarFlatbed from "../../src/components/MdiTrainCarFlatbed.vue";

test("MdiTrainCarFlatbed snapshot", () => {
  const wrapper = mount(MdiTrainCarFlatbed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
