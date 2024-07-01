
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarIntermodal from "../../src/components/MdiTrainCarIntermodal.vue";

test("MdiTrainCarIntermodal snapshot", () => {
  const wrapper = mount(MdiTrainCarIntermodal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
