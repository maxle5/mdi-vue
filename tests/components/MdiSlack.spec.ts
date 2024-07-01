
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSlack from "../../src/components/MdiSlack.vue";

test("MdiSlack snapshot", () => {
  const wrapper = mount(MdiSlack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
