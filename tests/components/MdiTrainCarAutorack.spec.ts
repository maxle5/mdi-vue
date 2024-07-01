
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrainCarAutorack from "../../src/components/MdiTrainCarAutorack.vue";

test("MdiTrainCarAutorack snapshot", () => {
  const wrapper = mount(MdiTrainCarAutorack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
