
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTicketConfirmationOutline from "../../src/components/MdiTicketConfirmationOutline.vue";

test("MdiTicketConfirmationOutline snapshot", () => {
  const wrapper = mount(MdiTicketConfirmationOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
